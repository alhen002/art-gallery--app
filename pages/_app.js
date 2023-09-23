import GlobalStyle from "../styles";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}
