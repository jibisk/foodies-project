import Link from 'next/link';
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function MealsDB() {

  const meals = await getMeals();

  return <MealsGrid meals={meals} />

}

export default function MealsPage() {

  
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meal, created <span className={classes.highlight}>by you</span></h1>
        <p>choose your favourite recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share your recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading Meals...</p>}>
          <MealsDB />
        </Suspense>
      </main>
    </>
  );
}
