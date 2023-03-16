// Get random number between 1-41. Store in variable.
let randomNumber = Math.floor((Math.random() * 41) + 1);
console.log(randomNumber);

// Adjust and store in variable the devil fruit image with random number selected.
let devilFruitImage = "images/devil-fruit-" + randomNumber + ".png";

// Change the image of devil fruit to the random fruit image.
document.querySelector(".devilFruitImg").setAttribute("src", devilFruitImage);

// Logic to name devil fruit with description.

switch (randomNumber) {
    case 1:
        document.querySelector(".devil-fruit-h").innerHTML = "Gomu Gomu no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which turns the person's body into rubber, effectively making them a rubber human."
        break;

    case 2:
        document.querySelector(".devil-fruit-h").innerHTML = "Bara Bara no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which allows the person to split their own body into pieces and control their pieces however they want, as well as making the user immune to slashing type attacks. The user is also knwon as a splitting human."
        break;

    case 3:
        document.querySelector(".devil-fruit-h").innerHTML = "Sube Sube no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which makes the person's body smooth and slippery. This makes most attacks and objects slide off their body which protects the user from harm in most scenarious."
        break;

    case 4:
        document.querySelector(".devil-fruit-h").innerHTML = "Bomu Bomu no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which allows the person to make any part of their body explode. They can explode their limbs, hair, mucus, or even breath. The user is also known as a bomb human."
        break;

    case 5:
        document.querySelector(".devil-fruit-h").innerHTML = "Kiro Kiro no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which allows the person to adjust their weight from 1 to 10,000 kilograms without affecting the overall size of their body."
        break;

    case 6:
        document.querySelector(".devil-fruit-h").innerHTML = "Hana Hana no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which allows the person to replicate or sprout pieces of their body from surfaces of objects or living thing."
        break;

    case 7:
        document.querySelector(".devil-fruit-h").innerHTML = "Doru Doru no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which allows the person to create candle wax from their body and manipulate it. They are known as a candle human."
        break;

    case 8:
        document.querySelector(".devil-fruit-h").innerHTML = "Baku Baku no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which allows the person to eat anything. The eaten items can also be merged into or combined with the user's body to create something else."
        break;

    case 9:
        document.querySelector(".devil-fruit-h").innerHTML = "Ito Ito no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which allows the person to create and manipulate strings. They are known as a string human."
        break;

    case 10:
        document.querySelector(".devil-fruit-h").innerHTML = "Awa Awa no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia type Devil Fruit which allows the person to create and control soap with bubbles. This can clean off dirt but also clean off power or drain energy. They are known as a soap human."
        break;

    case 11:
        document.querySelector(".devil-fruit-h").innerHTML = "Yomi Yomi no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which enhances the person's soul so they resurrect after their first death. This allows them to live a second time. They also use several other soul-based abilitie. They are known as a reviving human."
        break;

    case 12:
        document.querySelector(".devil-fruit-h").innerHTML = "Kage Kage no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which gives the person the ability to manifest and control shadows of living creatures. This includes their own as physical and animated forms. They are known as a ruler of shadows."
        break;

    case 13:
        document.querySelector(".devil-fruit-h").innerHTML = "Jiki Jiki no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which allows the person to create magnetic forces or fields to control metal."
        break;

    case 14:
        document.querySelector(".devil-fruit-h").innerHTML = "Ope Ope no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which gives the ability to create a spherical space in which the person can manipulate the orientation, movements, and physical configuration of things and people. This is done sort of like a surgeon. They are know as a free modification human."
        break;

    case 15:
        document.querySelector(".devil-fruit-h").innerHTML = "Mero Mero no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which allows a range of abilities which use emotions of love, lust or adoration to transform opponents into stone."
        break;

    case 16:
        document.querySelector(".devil-fruit-h").innerHTML = "Fude Fude no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which allows the person to create ink from their body and use a painting brush to turn the art created with that ink into lifelike objects."
        break;

    case 17:
        document.querySelector(".devil-fruit-h").innerHTML = "Mochi Mochi no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Special Paramecia-type Devil Fruit which allows the person to create, control, or transform into mochi."
        break;

    case 18:
        document.querySelector(".devil-fruit-h").innerHTML = "Goru Goru no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a non-canon Paramecia-type Devil Fruit which allows the person to telekinetically manipulate gold at will."
        break;

    case 19:
        document.querySelector(".devil-fruit-h").innerHTML = "Bijo Bijo no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a non-canon Paramecia-type Devil Fruit which allows the person to create illusory images of any picture the person touches."
        break;

    case 20:
        document.querySelector(".devil-fruit-h").innerHTML = "Peke Peke no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a non-canon Paramecia-type Devil Fruit which allows the person to transform other people into clones of Peketan and perhaps themself. (Unclear if clones are only Peketan or the person who ate fruit)"
        break;

    case 21:
        document.querySelector(".devil-fruit-h").innerHTML = "Gasha Gasha no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a non-canon Paramecia-type Devil Fruit which allows the user to telekinetically disassemble objects and reassemble them into whatever they want. They are known as an assimilation human."
        break;

    case 22:
        document.querySelector(".devil-fruit-h").innerHTML = "Kyara Kyara no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a non-canon Paramecia-type Devil Fruit which provides consciousness to non-living souls. Also allowing the soul to merge with others."
        break;

    case 23:
        document.querySelector(".devil-fruit-h").innerHTML = "Uta Uta no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Paramecia-type Devil Fruit which allows the person to teleport people's consciousnesses into a virtual reality by singing."
        break;

    case 24:
        document.querySelector(".devil-fruit-h").innerHTML = "Ushi Ushi no Mi, Model: Bison";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Zoan-type Devil Fruit which allows the person to transform into a full bison or a half-bison hybrid."
        break;

    case 25:
        document.querySelector(".devil-fruit-h").innerHTML = "Hito Hito no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Zoan-type Devil Fruit which allows the user to transform into a human hybrid or a human."
        break;

    case 26:
        document.querySelector(".devil-fruit-h").innerHTML = "Neko Neko no Mi, Model: Leopard";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Zoan-type Devil Fruit which allows the person to transform into a leopard hybrid and a full leopard. They are known as a leopard human."
        break;

    case 27:
        document.querySelector(".devil-fruit-h").innerHTML = "Ushi Ushi no Mi, Model: Giraffe";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Zoan-type Devil Fruit which allows the person to transform into a giraffe hybrid and a full giraffe. They are known as a giraffe human."
        break;

    case 28:
        document.querySelector(".devil-fruit-h").innerHTML = "Sara Sara no Mi, Model: Axolotl";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Zoan-type Devil Fruit which allows the person to turn into an axolotl hybrid and a full axolotl."
        break;

    case 29:
        document.querySelector(".devil-fruit-h").innerHTML = "Uo Uo no Mi, Model: Seiryu";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Mythical Zoan-type Devil Fruit which allows the person to transform into a hybrid and full version of an Azure Dragon."
        break;

    case 30:
        document.querySelector(".devil-fruit-h").innerHTML = "SMILE";
        document.querySelector(".devil-fruit-p").innerHTML = "Are artificial Zoan Devil Fruits created with SAD. Has a chance to change the person into an animal species hybrid or causing them to smile and laugh with no other way to show emotion."
        break;

    case 31:
        document.querySelector(".devil-fruit-h").innerHTML = "Artificial Devil Fruit";
        document.querySelector(".devil-fruit-p").innerHTML = "Are manmade fruits designed to give consumers special powers how a natural Devil Fruit would typically."
        break;

    case 32:
        document.querySelector(".devil-fruit-h").innerHTML = "Hebi Hebi no Mi, Model: Yamata no Orochi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Mythical Zoan-type Devil Fruit which allows the person to change into a hybrid and full version of the Yamata no Orochi which is an eight-headed snake or dragon in Japanese mythology."
        break;

    case 33:
        document.querySelector(".devil-fruit-h").innerHTML = "Inu Inu no Mi, Model: Okuchi no Makami";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Mythical Zoan-type Devil Fruit which allows the person to change into a hybrid and full version of an ancient wolf from mythology."
        break;

    case 34:
        document.querySelector(".devil-fruit-h").innerHTML = "Unknown Artificial Devil Fruit";
        document.querySelector(".devil-fruit-p").innerHTML = "An unknown artificial Devil Fruit created by Caesar in MADS."
        break;

    case 35:
        document.querySelector(".devil-fruit-h").innerHTML = "Batto Batto no Mi, Model: Vampire";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a game-exclusive, Mythical Zoan-type Devil Fruit which gives the user the ability to change into a vampire."
        break;

    case 36:
        document.querySelector(".devil-fruit-h").innerHTML = "Tori Tori no Mi, Model: Nue";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a non-canon Mythical Zoan-type Devil Fruit which allows the person to transform into a nue hybrid and a full nue."
        break;

    case 37:
        document.querySelector(".devil-fruit-h").innerHTML = "Moku Moku no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Logia-type Devil Fruit which allows the person to create, control, and turn into smoke."
        break;

    case 38:
        document.querySelector(".devil-fruit-h").innerHTML = "Suna Suna no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Logia-type Devil Fruit which allows the person to create, control, and turn into sand. Also known as the sand human."
        break;

    case 39:
        document.querySelector(".devil-fruit-h").innerHTML = "Mera Mera no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Logia-type Devil Fruit which allows the person to create, control, and turn into fire."
        break;

    case 40:
        document.querySelector(".devil-fruit-h").innerHTML = "Yami Yami no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a Logia-type Devil Fruit which allows the user to create and control darkness. Also known as a darkness human."
        break;

    case 41:
        document.querySelector(".devil-fruit-h").innerHTML = "Pasa Pasa no Mi";
        document.querySelector(".devil-fruit-p").innerHTML = "Is a non-canon Logia-type Devil Fruit which allows the user to create, control, and transform into pieces of paper. (Video game One Piece: Great Hidden Treasure of the Nanatsu Islands)."
        break;


    default:
        console.log("There was an error loading devil fruit info or image.");
        break;
}