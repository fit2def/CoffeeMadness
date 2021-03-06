export const accounts = {
    'jschrock@midwayusa.com': {
        name: 'jaymes',
        team: 'east'
    },
    'phanke@distributorcentral.com': {
        name: 'pablo',
        team: 'east'
    },
    'bguinn@midwayusa.com': {
        name: 'brandy',
        team: 'east'
    },
    'shogan@midwayusa.com': {
        name: 'shahn', 
        team: 'east'
    },
    'fluetkemeier@midwayusa.com': {
        name: 'fred',
        team: 'east'
    },
    'smunce@midwayusa.com': {
        name: 'sam', 
        team: 'west'
    },
    'teroberts@midwayusa.com': {
        name: 'todd',
        team: 'west'
    },
    'bstallo@midwayusa.com': {
        name: 'brandon',
        team: 'west'
    },
    'akunkel@midwayusa.com': {
        name: 'adam',
        team: 'west'
    },
    'clwilson@midwayusa.com': {
        name: 'chris',
        team: 'west'
    },
    'dvo@midwayusa.com': {
        name: 'dan',
        team: 'xtreme'
    },
    'ksmith@midwayusa.com': {
        name: 'katie',
        team: 'xtreme'
    },
    'jheath@midwayusa.com': {
        name: 'josh',
        team: 'xtreme'
    },
    'suptegrove@midwayusa.com': {
        name: 'stacey',
        team: 'xtreme'
    }
};

export const playerNames = Object.values(accounts).map(a => a.name);

export const teamDictionary = Object.values(accounts).reduce((acc, nt) => {
    acc[nt.name] = nt.team;
    return acc;
}, {});
