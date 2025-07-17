import sqlite3
from pymongo import MongoClient # type: ignore

# --- Update these ---
SQLITE_FILE = 'meals.db'
MONGO_URI = 'mongodb+srv://jibisk:jibisk@cluster0.okngbhy.mongodb.net/'
MONGO_DB_NAME = 'meals_db'

# Connect to SQLite
sqlite_conn = sqlite3.connect(SQLITE_FILE)
cursor = sqlite_conn.cursor()

# Connect to MongoDB Atlas
mongo_client = MongoClient(MONGO_URI)
mongo_db = mongo_client[MONGO_DB_NAME]

# Get all table names from SQLite
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()

for (table_name,) in tables:
    print(f"➡ Migrating table: {table_name}")
    
    cursor.execute(f"PRAGMA table_info({table_name});")
    columns = [column[1] for column in cursor.fetchall()]
    
    cursor.execute(f"SELECT * FROM {table_name};")
    rows = cursor.fetchall()

    documents = [dict(zip(columns, row)) for row in rows]

    if documents:
        mongo_db[table_name].insert_many(documents)

print("✅ Migration to MongoDB Atlas completed.")
sqlite_conn.close()
