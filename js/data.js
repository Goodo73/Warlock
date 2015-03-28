var character = {
	initSkill: 0,
	initStamina: 0,
	initLuck: 0,
	currSkill: 0,
	currStamina: 0,
	currLuck: 0,
	provisions: 10,
	gold: 0,
	item: ["Sword","Leather armour","Backpack","Lantern"],
	potion: {
		type: "",
		doses: 2
	}
}

var page = [
	// 	text: string - page text; || indicates new paragraph
	// 	opponents: array of objects - each opponent is an object with a name, skill and stamina
	// 	options: array of objects - each decision is an object with a page number and accompanying text
	// 	mandatoryAction = string - 'roll' required, such as Test Your Luck; options to be listed as successful/lucky first
	// }
	{
		text: "Only a foolhardy adventurer would embark upon such a perilous quest without first finding out as much as possible about the mountain and its treasures. Before your arrival at the foot of Firetop Mountain, you spent several days with the townsfolk of a local village some two days' journey from the base. Being a likeable sort of person, you found it easy to get on with the local peasants. Although they told many stories about the mysterious Warlock's sanctuary, you could not feel sure that all, or indeed any, of these were based on fact. The villagers had seen many adventurers pass through on their way to the mountain, but very few ever returned. The journey ahead was extremely dangerous, that you knew for certain. Of those who returned to the village, none contemplated going back to Firetop Mountain.||There seemed to be some truth in the rumour that the Warlock's treasure was stored in a magnificent chest with two locks, and the keys to these locks were guarded by various creatures within the dungeons. The Warlock himself was a sorcerer of great power. Some described him as old, others as young. Some said his power came from an enchanted deck of cards, others from the silky black gloves that he wore.||The entrance to the mountain was guarded by a pack of warty-faced Goblins, stupid creatures, fond of their food and drink. Towards the inner chambers, the creatures became more fearsome. To reach the inner chambers you would have to cross a river. The ferry service was regular, but the ferryman enjoyed a good barter, so you should save a Gold Piece for the trip. The locals also encouraged you to keep a good map of your wanderings, for without a map you would end up hopelessly lost within the mountain.||When it finally came to your days of leaving, the whole village turned out to wish you a safe journey. Tears came to the eyes of many of the women, young and old alike. You couldn't help wondering whether they were tears of sorrow shed by eyes which would never see you alive again...",
		opponents: [],
		options: [
			{
				nextPage: 1,
				text: "Begin your adventure"
			}
		],
		mandatoryAction = ""
	},
	{
		text: "At last your two-day hike is over. You unsheathe your sword, lay it on the ground and sigh with relief as you lower yourself down on to the mossy rocks to sit for a moment's rest. You stretch, rub your eyes and finally look up at Firetop Mountain.||The very mountain itself looks menacing. The steep face in front of you looks to have been savaged by the claws of some gargantuan beast. Sharp, rocky crags jut out at unnatural angles. At the top of the mountain you can see the eerie red colouring - probably some strange vegetation - which has given the mountain its name. Perhaps no one will ever know exactly what grows up there, as climbing the peak must surely be impossible.||Your quest lies ahead of you. Across the clearing is a dark cave entrance. You pick up your sword, get to your feet and consider what dangers may lie ahead of you. But with determination, you thrust the sword home into its scabbard and approach the cave.||You peer into the gloom to see dark, slimy walls with pools of water on the stone floor in front of you. The air is cold and dank. You light your lantern and step warily into the blackness. Cobwebs brush your face and you hear the scurrying of tiny feet: rats, most likely. You set off into the cave. After a few yards you arrive at a junction.",
		opponents: [],
		options: [
			{
				nextPage: 71,
				text: "Turn west"
			},
			{
				nextPage: 278,
				text: "Turn east"
			}
		],
		mandatoryAction = ""
	},
	{
		text: "",
		opponents: [],
		options: [
			{
				nextPage: 269,
				text: ""
			},
			{
				nextPage: 16,
				text: ""
			}
		],
		mandatoryAction = "Luck"
	},
	{
		text: "",
		opponents: [],
		options: [
			{
				nextPage: ,
				text: ""
			},
			{
				nextPage: ,
				text: ""
			}
		],
		mandatoryAction = ""
	},
	{
		text: "You find yourself in a north-south corridor. To the north the passage turns east some metres ahead. To the south, the passageway also turns east.",
		opponents: [],
		options: [
			{
				nextPage: 46,
				text: "Investigate north"
			},
			{
				nextPage: 332,
				text: "Go south"
			}
		],
		mandatoryAction = ""
	},
	{
		text: "A rough timber doorway is on the east wall of the passage. You listen at the door and can hear a jolly sort of humming sound.",
		opponents: [],
		options: [
			{
				nextPage: 97,
				text: "Knock on the door"
			},
			{
				nextPage: 292,
				text: "Continue northwards"
			}
		],
		mandatoryAction = ""
	},
	{
		text: "The large solid door has no handle. You charge it, but to no avail. The door is not going to budge. You decide to give up and go through the opening you passed in the east-west passageway some way back.",
		opponents: [],
		options: [
			{
				nextPage: 89,
				text: "Continue"
			}
		],
		mandatoryAction = ""
	},
	{
		text: "You are on the north bank of a fast-flowing river in a large underground cavern.",
		opponents: [],
		options: [
			{
				nextPage: 214,
				text: "Continue"
			}
		],
		mandatoryAction = ""
	},
	{
		text: "The passage ahead ends at a sturdy door. You listen but hear nothing. You try the handle, it turns, and you enter the room. As you look around you hear a loud cry from behind you and swing round to see a wild man leaping towards you wielding a large battle axe. He is a mad BARBARIAN and you must fight him!",
		opponents: [
			{
				name: "BARBARIAN",
				skill: 7,
				stamina: 6,
				escapePossible: true
			}
		],
		options: [
			{
				nextPage: 273,
				text: "You are victorious"
			},
			{
				nextPage: 189,
				text: "Escape"
			}
		],
		mandatoryAction = ""
	},
	{
		text: "",
		opponents: [],
		options: [
			{
				nextPage: ,
				text: ""
			},
			{
				nextPage: ,
				text: ""
			}
		],
		mandatoryAction = ""
	},
	{
		text: "",
		opponents: [],
		options: [
			{
				nextPage: ,
				text: ""
			},
			{
				nextPage: ,
				text: ""
			}
		],
		mandatoryAction = ""
	}
];