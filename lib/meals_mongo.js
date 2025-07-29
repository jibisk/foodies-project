import clientPromise from './mongodb';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';
import path from 'node:path';

export async function getMeals() {
  const client = await clientPromise;
  const db = client.db();
  const meals = await db.collection('meals').find().toArray();

  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading
  return meals;
}

export async function getMeal(slug) {
  const client = await clientPromise;
  const db = client.db();
  const meal = await db.collection('meals').findOne({ slug });

  return meal;
}

export async function saveMeal(meal) {
  const client = await clientPromise;
  const db = client.db();

  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // // Save image to /public/images/
  // const extension = meal.image.name.split('.').pop();
  // const fileName = `${meal.slug}.${extension}`;
  // const imagePath = path.join('public', 'images', fileName);

  // const bufferedImage = await meal.image.arrayBuffer();
  // fs.writeFileSync(imagePath, Buffer.from(bufferedImage));

  // meal.image = `/images/${fileName}`;
  

  await db.collection('meals').insertOne(meal);
}
