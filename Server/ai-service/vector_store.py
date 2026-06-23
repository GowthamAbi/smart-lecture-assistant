import json
import faiss
import numpy as np

INDEX_PATH = "../vector-db/faiss.index"

META_PATH = "../vector-db/metadata.json"

def save_index(index):

    faiss.write_index(
        index,
        INDEX_PATH
    )

def load_index():

    return faiss.read_index(
        INDEX_PATH
    )

def save_metadata(data):

    with open(
        META_PATH,
        "w"
    ) as f:

        json.dump(
            data,
            f
        )

def load_metadata():

    with open(
        META_PATH,
        "r"
    ) as f:

        return json.load(f)