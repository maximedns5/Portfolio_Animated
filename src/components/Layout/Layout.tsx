import type { PropsWithChildren } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import styles from './Layout.module.css';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={`appShell ${styles.shell}`}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
