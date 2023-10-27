import random, json


def randomState():
    f = open('US_States_and_cities.json')
    states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida',
            'Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland',
            'Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
            'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
            'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington',
            'West Virginia','Wisconsin','Wyoming']

    # ranState chooses a random state from states list
    ranState = random.choice(states)
    data = json.load(f)
    ranCity = random.randint(0, len(data[ranState]) -1)

    f.close()
    return (ranState+ ", " + data[ranState][ranCity])

