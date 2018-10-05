module.exports = [
    {
        title: 'Getting Started',
        collapsable: false,
        children: ['', 'installation'],
    },
    {
        title: 'How to use',
        collapsable: false,
        children: prefix('how-to', 
        	['', 'fields']
        ),
    }
];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}