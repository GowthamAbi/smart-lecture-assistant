from embedding import create_embedding

from faiss_index import search

from vector_store import load_metadata

def retrieve_context(query):

    vector = create_embedding(
        query
    )

    indices = search(vector)

    metadata = load_metadata()

    context = []

    for idx in indices[0]:

        if str(idx) in metadata:

            context.append(

                metadata[
                    str(idx)
                ]

            )

    return "\n".join(
        context
    )