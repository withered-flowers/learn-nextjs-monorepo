'use client';

type Props = {
  fnLogout: () => void;
  token: string | undefined;
};

const NavBar = ({ fnLogout, token }: Props) => {
  // This is client side
  const onClickProfileHandler = () => {
    console.log('Button profile clicked');
  };

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <section>
        <p>LocalStorageUsage</p>
      </section>

      <section style={{ display: 'flex' }}>
        <button
          type="button"
          style={{ cursor: 'pointer', padding: '0.5rem 1rem' }}
          hidden={token ? true : false}
          onClick={onClickProfileHandler}
        >
          Profile
        </button>

        <form action={fnLogout}>
          <button
            type="submit"
            style={{ cursor: 'pointer', padding: '0.5rem 1rem' }}
            hidden={!token}
          >
            Logout
          </button>
        </form>
      </section>
    </nav>
  );
};

export default NavBar;
