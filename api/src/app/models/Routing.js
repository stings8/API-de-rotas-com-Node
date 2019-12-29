import Sequelize, { Model } from 'sequelize';

class Routing extends Model {
  static init(sequelize) {
    super.init(
      {
        from: Sequelize.GEOMETRY('POINT', 4326),
        to: Sequelize.GEOMETRY('POINT', 4326)
      },
      {
        sequelize,
      }
    );

    return this;
  }

}

export default Routing;
