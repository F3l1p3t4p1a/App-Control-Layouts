import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <ScrollView>
          <StatusBar />
        <View style={{flexDirection: 'row'}}>
          <Image 
              source={require('./assets/img/bg.jpg')}
              style={styles.banner}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.titulo}>Que Hacer en Paris</Text>

          <ScrollView 
          horizontal
          >

            <View>
              <Image 
                source={require('./assets/img/actividad1.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View>
              <Image 
                source={require('./assets/img/actividad2.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View>
              <Image 
                source={require('./assets/img/actividad3.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View>
              <Image 
                source={require('./assets/img/actividad4.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View>
              <Image 
                source={require('./assets/img/actividad5.jpg')}
                style={styles.ciudad}
              />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Los Mejores Alojamientos</Text>

          <View>
            <View>
              <Image 
                source={require('./assets/img/mejores1.jpg')}
                style={styles.mejores}
              />
            </View>
            <View>
              <Image 
                source={require('./assets/img/mejores2.jpg')}
                style={styles.mejores}
              />
            </View>
            <View>
              <Image 
                source={require('./assets/img/mejores3.jpg')}
                style={styles.mejores}
              />
            </View>
          </View>
          <Text style={styles.titulo}>Hospedajes en USA</Text>

          <View style={styles.listado}>
          <View style={styles.listadoItem}>
              <Image 
                source={require('./assets/img/hospedaje1.jpg')}
                style={styles.mejores}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image 
                source={require('./assets/img/hospedaje2.jpg')}
                style={styles.mejores}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image 
                source={require('./assets/img/hospedaje3.jpg')}
                style={styles.mejores}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image 
                source={require('./assets/img/hospedaje4.jpg')}
                style={styles.mejores}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  container: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem: {
    flexBasis: '49%'
  }
});
