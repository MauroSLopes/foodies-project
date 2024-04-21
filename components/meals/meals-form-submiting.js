'use client';

import { useFormStatus } from 'react-dom';

export default function MealsSubmitButton() {
    const { pending } = useFormStatus();

    return <button disabled={pending}>
        {pending ? 'Submiting... ' : 'Share Meal'}
    </button>

}