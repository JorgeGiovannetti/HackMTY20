*README copied from devpost submission for HackMTY 2020*

## Inspiration
A global pandemic is an event that affects negatively on the vast majority of people. Businesses are in special danger of going bankrupt. As social interactions and daily activities return to normal, businesses have the responsibility of helping diminish the spread of any disease in there workplaces.

## What it does
POSTy is the digital platform with full monitoring on covid prevention measures using visual recognition. It detects infractions in both face mask violations and social distancing in real time. We also help visualize data in real time with state of the art charts with important information for the user.

## How I built it
Used a microservices architecture to run a python endpoint which processes a video stream and serves it to the web app. The processing uses machine learning models for visual recognition using keras and caffe. The platform was developed using React, Firebase, SWR, recharts and Ant Desgin.

## Challenges I ran into
Powerful hardware is a must for any visual recognition project, and unfortunately for us a vast majority of the time was spent understanding and adapting to this shortcoming. Another challenge was the communication between the python script and the web app.

## Accomplishments that I'm proud of
We built a highly functional real time app that meets all of our expectations and a full rounded product with a large amount of challenges we had to overcome.

## What I learned
We learned to make full stack web platforms using endpoints. Real time communication was a must for this project so we also learned a lot about that.

## What's next for POSTy
Doing some standard metric to accurately tell how safe a business is being based on the reports from the visual recognition. This expansion can have numerous effects like connection to the corresponding government entity.

