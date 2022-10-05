const { STRING, UUID, UUIDV4 } = require('sequelize')
const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/new_genesis_db')

const Team = conn.define('team', {
    id: {
        type: UUID, 
        defaultValue: UUIDV4, 
        primaryKey: true
    },
    name: {
        type: STRING, 
        allowNull: false
    }, 
    image: {
        type: STRING, 
        allowNull: false
    },
    title: {
        type: STRING, 
        allowNull: false
    }, 
    description: {
        type: Sequelize.DataTypes.TEXT
    }
})


const Nft = conn.define('nft', {
    image: {
        type: STRING, 
        allowNull: false
    }
})

const seed = async() => {
    const [ John, Jackson ] = await Promise.all([
        Team.create({name: 'John', image: '', title: 'Founder', description: 'yooooooooo'}),
        Team.create({name: 'Jackson', image: '', title: 'Developer', description: 'whats goooood'}),
    ])
}

module.exports = {
    conn, 
    Team, 
    Nft, 
    seed
}