import 'package:flutter/material.dart';

class IssuedBook extends StatefulWidget {
  @override
  _IssuedBookState createState() => _IssuedBookState();
}

class _IssuedBookState extends State<IssuedBook> {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount: 5,
        itemBuilder: (context, index) {
          return Card(
            margin: EdgeInsets.all(10),
            clipBehavior: Clip.antiAlias,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(10),
            ),
            child: ListTile(
              leading: Image.asset(
                'asset/image/login_background.jpg',
                fit: BoxFit.cover,
              ),
              title: Text('COA'),
              subtitle: Text('Department: CSE'),
            ),
          );
        });
  }
}
