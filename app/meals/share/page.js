import { shareMeal } from '@/lib/actions';
import ShareMealForm from '@/components/meals/share-meal-form';

export default function ShareMealPage() {
  return <ShareMealForm action={shareMeal} />;
}
