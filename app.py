import os
import datetime

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from tempfile import mkdtemp

# Configure application
app = Flask(__name__)

@app.route("/")
def index():

    return render_template("index.html")