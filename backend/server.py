from flask import Flask 
from flask import g
import sqlite3
from helpers import get_dates
from flask import jsonify
from flask_cors import CORS, cross_origin









DATABASE = 'nyt.db'

app= Flask (__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = '*'



def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = dict_factory
    return db

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv


@app.route('/')
@cross_origin()
def index():
    l=query_db("SELECT e.rank,b.id FROM Books as b,entries as e WHERE b.id=e.id")
    return jsonify({"hello":"hello"})


@app.route('/yearly_top/<int:page>',methods=['GET'])
@app.route('/yearly_top/',methods=['GET'])
@cross_origin()
def yearly_top(page=0):
    max_count = 190
    ret={}
    if page==None:
        page=0
    if page*10>max_count-10:
        page=18
    offset= page*10
    l=query_db("SELECT * FROM Books ORDER BY score desc LIMIT 10 OFFSET ?",(offset,))
    ret["books"]=l
    ret=jsonify(ret)
    return ret 

@app.route("/heatmap/<id>")
@cross_origin()
def heatmap(id):
    
    l=query_db("SELECT * FROM entries WHERE id = ?",(id,))
    dates=get_dates()
    ret={}
    for date in dates:
        ret[date]=0
    for item in l:
        ret[item["date"]]=item["rank"]
    return jsonify({"list":list(ret.values())})


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()