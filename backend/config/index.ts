const user = process.env.DATABASE_USER || 'test_user';
const password = process.env.DATABASE_PASSWORD || 'test_password';
const host = process.env.DATABASE_HOST || 'localhost';
const port = process.env.DATABASE_PORT || '5432';
const database = process.env.DATABASE_NAME || 'test_db';

// postgresql://<username>:<password>@<host>:<port>/<database>
// DATABASE_URL=postgresql://myuser:mypassword@postgres:5432/mydatabase

export const development = {
  connect: `postgresql://${user}:${password}@${host}:${port}/${database}`
};