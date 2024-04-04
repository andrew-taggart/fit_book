-- settings.sql
CREATE DATABASE appoint;
CREATE USER appointuser WITH PASSWORD 'appoint';
GRANT ALL PRIVILEGES ON DATABASE appoint TO appointuser;