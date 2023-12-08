const homestyle = {
  headerContainer: {
    position: 'fixed',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  l: {
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'flex-start', 
    width: 100,
    height: 8,
  },
  header: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'flex-end', 
    padding: 8,
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    margin: 80,
  },
  welcomeImage: {
    width: 440,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 12,
    marginTop: 15,
  },
  additionalText: {
    textAlign: 'center',
    margin: 20
  },
};

export default homestyle;