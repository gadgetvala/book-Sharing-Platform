import 'package:flutter/material.dart';

class ProfilePage extends StatefulWidget {
  @override
  _ProfilePageState createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  @override
  Widget build(BuildContext context) {
    var width = MediaQuery.of(context).size.width;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
      ),
      body: Container(
        child: Column(
          children: <Widget>[
            Center(
              child: Column(
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.fromLTRB(0, 50, 0, 40),
                    child: CircleAvatar(
                      backgroundImage:
                          AssetImage('asset/image/login_background.jpg'),
                      radius: 100.0,
                      //child: Image(image: AssetImage('asset/image/login_background.jpg')),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(30, 10, 30, 10),
                    child: Column(
                      mainAxisSize: MainAxisSize.max,
                      children: <Widget>[
                        Text(
                          'Tekeshwar Singh',
                          style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 28,
                              letterSpacing: 3),
                        ),
                        SizedBox(
                          height: 5,
                        ),
                        Text(
                          '190305105722',
                          style: TextStyle(fontSize: 24, letterSpacing: 2),
                        ),
                        SizedBox(
                          height: 20,
                        ),
                        TextFormField()
                      ],
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
