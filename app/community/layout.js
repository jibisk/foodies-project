export const metadata = {
  title: 'All Community',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function MealsLayout({ children }) {
  return (
    <>
    <div className="row">
        {children}
    </div>
    </>
  );
}
