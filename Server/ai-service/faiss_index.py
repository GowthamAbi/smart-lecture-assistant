import faiss
import numpy as np

dimension = 384

index = faiss.IndexFlatL2(
    dimension
)

def add_vectors(vectors):

    vectors = np.array(
        vectors
    ).astype(
        "float32"
    )

    index.add(vectors)

def search(vector,k=5):

    vector = np.array(
        [vector]
    ).astype(
        "float32"
    )

    distances,indices = index.search(
        vector,
        k
    )

    return indices