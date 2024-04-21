'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isValidInformation(text) {
    return !text || text.trim() === '';
}

export async function ShareMeal(prevState, formData) {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: `\n${formData.get('instructions')}`,
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (
        isValidInformation(meal.title) ||
        isValidInformation(meal.summary) ||
        isValidInformation(meal.instructions) ||
        isValidInformation(meal.creator) ||
        isValidInformation(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0) {

        return {
            message: 'Invalid input'
        }
    }

    revalidatePath('/meals');
    await saveMeal(meal);
    redirect('/meals');
}