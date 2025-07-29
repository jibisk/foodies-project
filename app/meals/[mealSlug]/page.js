import Image from 'next/image';
import classes from './page.module.css'
import { getMeal } from '@/lib/meals_mongo';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateMetadata({params}) {
  const meal = await getMeal(params.mealSlug);

  if(!meal){
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealsDetailsPage({params}) {

  const meal = await getMeal(params.mealSlug);

  if(!meal){
    notFound();
  }

  // meal.instructions = meal.instructions.replace(/\n/g, '<br/>');
  meal.instructions = (meal.instructions || '').replace(/\n/g, '<br/>');
  

  return (
    <>
    <Suspense className={classes.loading} fallback={<p>Loading</p>}>
      <header className={`${classes.header} row`}>
        <div className={`${classes.image} col-12 col-sm-12 col-md-6`}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={`${classes.headerText} col-12 col-sm-12 col-md-6 d-flex justify-content-center flex-column`}>
          <h1 className="text-break">{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}> {meal.creator}</a>
          </p>
          <p className={`${classes.summary} text-break`}>{meal.summary}</p>
        </div>
      </header>
      <main className="row">
        <div className="col-12">
        <p className={`${classes.instructions} text-break`}
          dangerouslySetInnerHTML={{
            __html: meal.instructions
          }}
        >
        </p>
        </div>
      </main>
    </Suspense>
    </>
  );
}
