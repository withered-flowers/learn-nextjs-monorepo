import { serverSideLogin } from '../services/local-user';

export const metadata = {
  title: 'Main Page',
};

export default async function Index() {
  return (
    <section
      style={{
        backgroundColor: 'rgb(241 245 249)',
        padding: '0.25rem',
        marginTop: '0.5rem',
      }}
    >
      <form action={serverSideLogin}>
        <h1>Server Side Form</h1>
        <button
          type="submit"
          style={{
            cursor: 'pointer',
            padding: '0.5rem 1rem',
            backgroundColor: 'rgb(187 247 208)',
          }}
        >
          Login
        </button>
      </form>
    </section>
  );
}
