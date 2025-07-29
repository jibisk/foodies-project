'use client'; 

import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';
import MealsFormSubmit from '@/components/meals/meals-form-submit';
import { useFormState } from 'react-dom';

export default function ShareMealPage() {

  const [state, formAction] = useFormState(shareMeal, {} ) 

  return (
    <>
      <header className={`${classes.header} row`}>
        <div className="col-12">
          <h1 className="text-center">
            Share your <span className={classes.highlight}>favorite meal</span>
          </h1>
          <p className="text-center">Or any other meal you feel needs sharing!</p>
        </div>
      </header>
      <main className={`${classes.main} row`}>
        <div className="col-12">
        <form className={classes.form} action={shareMeal}>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 mb-3">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name"  />
            </div>
            <div className="col-12 col-sm-12 col-md-6 mb-3">
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email"  />
            </div>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title"  />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary"  />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
            ></textarea>
          </p>
          <ImagePicker label="your image" name="image" />

           {state.errors && (
              <ul className="form-errors">
                {state.errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}

          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
        </div>
      </main>
    </>
  );
}
