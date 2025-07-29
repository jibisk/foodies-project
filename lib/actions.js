'use server'; // use server directives

import { redirect } from "next/navigation";
import { saveMeal } from "./meals_mongo";
import { revalidatePath } from "next/cache";
import { uploadImage } from "./cloudinary";

function isInvalidText(text) {
    return !text|| text.trim() === '';
}

 export async function shareMeal(prevState, formData) {

    const meal = {
      creator : formData.get('name'),
      creator_email : formData.get('email'),
      title : formData.get('title'),
      instructions : formData.get('instructions'),     
      summary : formData.get('summary'),     
      image : formData.get('image'),     
    }

    // server side validation
    // if(
    //     isInvalidText(meal.title) || 
    //     isInvalidText(meal.summary) ||
    //     isInvalidText(meal.instructions) ||
    //     isInvalidText(meal.creator) ||
    //     isInvalidText(meal.creator_email) ||
    //     !meal.creator_email.includes('@') ||
    //     !meal.image ||
    //     !meal.image.size === 0
    // ){
    //     // throw new Error("in-valid input");
    //     return{
    //         message: 'Invalid input.'
    //     }
    // }

     // await saveMeal(meal)

let errors = [];

  if (isInvalidText(meal.title)) { errors.push('Title is required.'); }
  if (isInvalidText(meal.summary)) {  errors.push('Summary is required.'); }
  if (isInvalidText(meal.instructions)) { errors.push('Instructions is required.'); }
  if (isInvalidText(meal.creator)) {  errors.push('Name is required.'); }
  if (isInvalidText(meal.creator_email)) {  errors.push('Email is required.'); }
  // if (!meal.creator_email.includes('@')) {  errors.push('Invalid Email'); }

  if (!meal.image || meal.image.size === 0) { errors.push('Image is required.'); }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;

  try {
    imageUrl = await uploadImage(meal.image);
  } catch (error) {
    throw new Error(
      'Image upload failed, post was not created. Please try again later.'
    );
  }

   
    await saveMeal({
      creator : formData.get('name'),
      creator_email : formData.get('email'),
      title : formData.get('title'),
      instructions : formData.get('instructions'),     
      summary : formData.get('summary'),     
      image : imageUrl,  
  })
    // revalidatePath('/meals', 'layout'); // or page
    revalidatePath('/', 'layout');
    redirect('/meals');
  }