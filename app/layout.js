import MainHeader from '@/components/main-header/main-header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <MainHeader />
          <div className="container">      
            {children}
          </div>
      </body>
    </html>
  );
}
