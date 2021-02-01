export default function userModel(sequelize, dataTypes) {
  return sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: dataTypes.STRING,
      unique: true,
      validate: {
        notIn: {
          args: [['Guest', 'guest']],
          msg: 'User name is already taken',
        },
      },
    },
    email: {
      allowNull: false,
      type: dataTypes.STRING,
      unique: true,
      validate: {
        notNull: { msg: 'User must have an email id' },
        notEmpty: { msg: 'email cannot be empty' },
        isEmail: { msg: 'Provide a valid email' },
      },
    },
    password: {
      allowNull: false,
      type: dataTypes.STRING,
      unique: true,
    },
    role: {
      type: dataTypes.BOOLEAN,
    },
    photo: {
      type: dataTypes.STRING,
    },
    created_at: {
      allowNull: false,
      type: dataTypes.DATE,
    },
    updated_at: {
      allowNull: false,
      type: dataTypes.DATE,
    },
  }, { underscored: true });
}
