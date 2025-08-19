from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
import os
from langchain_core.prompts import load_prompt,PromptTemplate
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

'''prompt = PromptTemplate(
    template= "List five facts about the {topic}",
    input_variables=['topic']
)


model = ChatOpenAI(model='gpt-4.1-mini')'''


def get_response(topic):
    prompt = PromptTemplate(
    template= "List five facts about the {topic}",
    input_variables=['topic']
    )


    model = ChatOpenAI(model='gpt-4o-mini')

    result = model.invoke(prompt.format(topic=topic))
    return result.content
