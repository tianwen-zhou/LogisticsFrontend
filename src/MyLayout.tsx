// in src/MyLayout.js
import { Layout } from 'react-admin';
import { MyMenu } from './MyMenu';

export const MyLayout = ({ children }) => (
    <Layout menu={MyMenu}>
        {children}
    </Layout>
);