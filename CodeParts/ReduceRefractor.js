// Original
if (recipe == 'SPANISH') {
    fudge = SPANISH_FUDGE;
    amt = base * SPANISH_FUDGE;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
} else if ((recipe == 'FRENCH') || (recipe == 'ENGLISH')) {
    fudge = (recipe == 'FRENCH') ? FRENCH_FUDGE : ENGLISH_FUDGE;
    amt = base * fudge;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
    if (recipe == 'FRENCH') {
        chocolate = 7;
    }
} else {
    fudge = 1;
    amt = base;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
}

//Reduced
fudge = ((recipe === 'SPANISH') ? SPANISH_FUDGE : (recipe === 'FRENCH') ? FRENCH_FUDGE : (recipe === 'ENGLISH') ? ENGLISH_FUDGE : 1);
amt = (fudge === 1) ? base : (base * fudge);
chocolate = (recipe === 'FRENCH') && 7;
sugar = 2 * bottom(amt) + top(amt) * 1.17;