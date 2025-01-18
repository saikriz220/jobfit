CREATE TABLE jf.users (
    user_id BIGSERIAL PRIMARY KEY,               -- Auto-incremented big integer as the primary key
    user_uuid UUID DEFAULT gen_random_uuid(),    -- UUID column with default value generated
    first_name VARCHAR(100) NOT NULL,            -- First name, required
    last_name VARCHAR(100) NOT NULL,             -- Last name, required
    email VARCHAR(255) UNIQUE NOT NULL,          -- User email, must be unique
    password TEXT NOT NULL,                      -- User password (plain or hashed, as required)
    usertype SMALLINT NOT NULL DEFAULT 1,        -- User type as a small integer with a default value
    created_at TIMESTAMP DEFAULT NOW(),          -- Timestamp for when the record is created
    resume_path TEXT                              -- Path to resume file
);
