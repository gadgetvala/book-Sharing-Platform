import 'package:bsp/Screens/HomePage/DefaultPage.dart';
import 'package:bsp/Screens/favPage.dart';
import 'package:bsp/Screens/profile.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Books'),
        centerTitle: true,
        leading: IconButton(
            icon: Icon(Icons.person),
            onPressed: () {
              Navigator.of(context).push(
                  CupertinoPageRoute(builder: (context) => ProfilePage()));
            }),
        actions: <Widget>[
          IconButton(icon: Icon(Icons.search), onPressed: () {})
        ],
      ),
      body: getScreen(_selectedIndex),
      bottomNavigationBar: BottomAppBar(
        shape: CircularNotchedRectangle(),
        clipBehavior: Clip.antiAlias,
        notchMargin: 5.0,
        child: BottomNavigationBar(
          items: [
            BottomNavigationBarItem(
                icon: Icon(Icons.home), title: Text("Home")),
            BottomNavigationBarItem(icon: Icon(Icons.book), title: Text("Book"))
          ],
          currentIndex: _selectedIndex,
          onTap: _onTap,
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.of(context)
              .push(MaterialPageRoute(builder: (context) => FavPage()));
        },
        child: Icon(Icons.favorite),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
    );
  }

  getScreen(int position) {
    if (position == 0) {
      return DefaultPage();
    }
    if (position == 1) {
      return FavPage();
    }
  }

  _onTap(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }
}
