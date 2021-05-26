import React from 'react' 
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {

     const { 
          numeroAnterior,
          numero,
          limpiar,
          positivoNegativo,
          btnDel,
          btnDividir,
          armarNumero,
          btnMultiplicar,
          btnRestar,
          btnSumar,
          calcular
     } = useCalculadora();
     

     return (
          
          <View style={styles.calculadoraContainer}>
               {
                    (numeroAnterior !== '0') && (<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)
               }
               
               <Text 
                    style={styles.resultado}
                    numberOfLines={1}
                    adjustsFontSizeToFit
               >
                    {numero}
               </Text>
               

               <View style={styles.fila}>
                    {/* Componente Reutilizable */}
                    <BotonCalc texto="C" color="#9B9B9B" accion={ limpiar }/>
                    <BotonCalc texto="+/-" color="#9B9B9B" accion={ positivoNegativo }/>
                    <BotonCalc texto="del" color="#9B9B9B" accion={ btnDel }/>
                    <BotonCalc texto="/" color="#FF9427" accion={ btnDividir }/>
                    {/* Componente Reutilizable */}
               </View>
               
               <View style={styles.fila}>
                    {/* Componente Reutilizable */}
                    <BotonCalc texto="7" accion={ armarNumero }/>
                    <BotonCalc texto="8" accion={ armarNumero }/>
                    <BotonCalc texto="9" accion={ armarNumero }/>
                    <BotonCalc texto="X" color="#FF9427" accion={ btnMultiplicar }/>
                    {/* Componente Reutilizable */}
               </View>

               <View style={styles.fila}>
                    {/* Componente Reutilizable */}
                    <BotonCalc texto="4" accion={ armarNumero }/>
                    <BotonCalc texto="5" accion={ armarNumero }/>
                    <BotonCalc texto="6" accion={ armarNumero }/>
                    <BotonCalc texto="-" color="#FF9427" accion={ btnRestar }/>
                    {/* Componente Reutilizable */}
               </View>

               <View style={styles.fila}>
                    {/* Componente Reutilizable */}
                    <BotonCalc texto="1" accion={ armarNumero }/>
                    <BotonCalc texto="2" accion={ armarNumero }/>
                    <BotonCalc texto="3" accion={ armarNumero }/>
                    <BotonCalc texto="+" color="#FF9427" accion={ btnSumar }/>
                    {/* Componente Reutilizable */}
               </View>

               <View style={styles.fila}>
                    {/* Componente Reutilizable */}
                    <BotonCalc texto="0" ancho accion={ armarNumero }/>
                    <BotonCalc texto="." accion={ armarNumero }/>
                    <BotonCalc texto="=" color="#FF9427" accion={ calcular }/>
                    {/* Componente Reutilizable */}
               </View>
          </View>
     )
}
