import sqlite3

conn = sqlite3.connect("nyt.db")
cur= conn.cursor()

#SELECT e.rank,b.name FROM Books as b,entries as e WHERE b.id=e.id;
def update_score():
    scores ={}
    cur.execute("SELECT id FROM Books ORDER BY score desc")
    l=cur.fetchall()
    count=0
    for id in l:
        id=id[0]
        count=count + 1
        cur.execute("UPDATE Books SET rank=? WHERE id=?",(count,id))


update_score()

conn.commit()
conn.close()
