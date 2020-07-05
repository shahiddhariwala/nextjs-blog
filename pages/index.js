import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Front End developer with industry experience building websites and web applications.
        I specialize in Java and have professional experience working with React and Node
        I also have experience working with Spring, SpringBoot, PHP, and Angular.
        Take a look at my work at<a href="https://github.com/shahiddhariwala"> Github </a>
        and connect me on <a href="https://www.linkedin.com/in/shahiddhariwala/">LinkedIn</a></p>
      </section>
    </Layout>
  )
}