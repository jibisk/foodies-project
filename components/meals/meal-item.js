import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
        style={{ objectFit: "cover" }}/>
        </div>
        <div className={classes.headerText}>
          <h2 className="text-break">{title}</h2>
          <p className="text-break">by {creator}</p>
        </div>
      </header>
      <div className={`${classes.content} text-break`}>
        <p className={`${classes.summary} text-break`}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`} prefetch>View Details</Link>
        </div>
      </div>
    </article>
  );
}
