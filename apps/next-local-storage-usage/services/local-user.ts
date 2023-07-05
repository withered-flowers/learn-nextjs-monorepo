import { cookies } from 'next/headers';

export const serverSideLogin = async () => {
  'use server';

  const store = cookies();
  store.set('token', new Date().getUTCMilliseconds().toString(), {
    expires: new Date(Date.now() + 15 * 60 * 1000),
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  console.log("It's clicked", store.get('token')?.value);
};

export const serverSideLogout = async () => {
  'use server';

  const store = cookies();
  store.delete('token');

  console.log("It's cleared", store.get('token')?.value);
};

export const returnToken = () => cookies().get('token')?.value;
