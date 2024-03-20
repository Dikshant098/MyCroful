// PDFComponent.js
import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../constants/baseUrl';
import axios from 'axios'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    marginTop: 450,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10
  },
  text: {
    fontSize: 12,
    marginBottom: 10
  }
});

const PDF = () => {
  const param = useParams();
  const [formData, setFormData] = useState()
  const [cartDetails, setCartDetails] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getCartDetails()
    setFormData(JSON.parse(param?.formData))

    console.log(JSON.parse(param?.formData));
  }, [param])

  const getCartDetails = async () => {
    const userId = localStorage.getItem('Croful')
    const url = BASE_URL + '/cart/getCartDetails/' + userId
    try {
      const { data } = await axios.get(url)
      setCartDetails(data)
      let subtotal = 0;
      data.map(d => {
        subtotal = (d.price * d.quantity) + subtotal
      })
      setTotal(subtotal)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

  },[formData])

  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '200vh' }}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>Invoice</Text>
              <Text style={styles.subtitle}>Details</Text>
              <View>
                
                <Text style={styles.text}>First Name: {formData?.firstName}</Text>
                <Text style={styles.text}>Last Name: {formData?.lastName}</Text>
                <Text style={styles.text}>companyName: {formData?.companyName}</Text>
                <Text style={styles.text}>country: {formData?.country}</Text>
                <Text style={styles.text}>streetAddress: {formData?.streetAddress}</Text>
                <Text style={styles.text}>streetAddress: {formData?.streetAddress}</Text>
                {/* <Text style={styles.text}>Last Name: {formData?.streetAddress}</Text> */}
                {/* Add more details here */}
                <Text style={styles.text}>Produce Name: </Text>

                {cartDetails?.map((productDetails, i) => {
                  return (
                    <>
                      <Text style={styles.text}>{i + 1 + "  " + productDetails?.productName + " - " + productDetails?.quantity} </Text>
                    </>
                  )
                })}

                <Text style={styles.text}>Total:  {total + " Rs"} </Text>
                <Text style={styles.text}></Text>

              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  )
}

export default PDF