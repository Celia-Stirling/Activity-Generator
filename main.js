const willowActivities = ['jigsaw', 'painting', 'colouring books', 'Penguin Trap', 'Monkey Tree', 'Frogs Frenzy', 'Barbies', 'Sylvanian Families', 'Railways', 'Building with Blocks'
]
const randomActivityGenerator = activities => {
    let randomNumber = Math.floor(Math.random() * activities.length);
    console.log(activities[randomNumber]); 
}

randomActivityGenerator(willowActivities);