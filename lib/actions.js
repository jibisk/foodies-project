'use server'; // use server directives
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
    return !text|| text.trim() === '';
}

 export async function shareMeal( formData) {

    const meal = {
      creator : formData.get('name'),
      creator_email : formData.get('email'),
      title : formData.get('title'),
      instructions : formData.get('instructions'),     
      summary : formData.get('summary'),     
      image : formData.get('image'),     
    }

    // server side validation
    if(
        isInvalidText(meal.title) || 
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        !meal.image.size === 0
    ){
        // throw new Error("in-valid input");
        return{
            message: 'Invalid input.'
        }
    }

    await saveMeal(meal)
    revalidatePath('/meals', 'layout'); // or page
    redirect('/meals');
  }