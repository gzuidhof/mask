from __future__ import division
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

if __name__ == "__main__":

    #Response dataframe
    responses = pd.read_json('./data/responses.json')
    #Participant dataframe
    participants = pd.read_json('./data/participants.json')
    print "Amount of 'participants':", len(participants)

    #Group per subject
    grouped_by_participants = responses.groupby('participantId')

    print "Amount of participants who answered at least 1:", len(grouped_by_participants)

    #Responses of those who answered 36 questions
    responses = grouped_by_participants.filter(lambda x: len(x) == 36)

    grouped_by_participants = responses.groupby('participantId')
    print "Amount of participants who answered all 36:", len(grouped_by_participants)

    #Merge into one big table and write to csv
    merged_df = pd.merge(participants, responses, left_on="_id", right_on="participantId")
    merged_df.to_csv("./data/robotfaces.csv")


    #Lets plot something over time

    means = []
    stds = []

    x = range(0,36) #0 through 35
    for _x in x:
        question_answers = responses[responses['questionNumber']==_x]['likability']
        means.append( question_answers.mean() )
        stds.append( question_answers.std() )


    plt.figure()
    plt.plot(x, means, label="mean")
    plt.plot(x, stds, label="std")

    plt.ylabel("Likeability")
    plt.xlabel("Question number")
    plt.legend()

    plt.show()
