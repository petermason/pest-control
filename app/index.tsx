import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Text } from '~/components/ui/text';

import logo from '~/assets/images/pest-control-logo.png';
import { findHighActivityPaths } from '~/lib/utils/findHighActivityPaths';
import { places } from '~/data';
import { buildPlaceTree } from '~/lib/utils/buildPlaceTree';
import { BuildingPlan } from '~/components/ui/building-plan';
import { PathFinder } from '~/components/ui/path-finder';
import { Scroll } from 'lucide-react-native';


export default function Screen() {
  const [progress, setProgress] = React.useState(78);
  const highActivityPaths = findHighActivityPaths(places, 3);
  const tree = buildPlaceTree(places);

  console.log("highActivityPaths", highActivityPaths);
  console.log("tree", tree);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  return (
    <ScrollView style={{flex: 1}}>
      <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
        <Card className='w-full max-w-sm p-6 rounded-2xl'>
          <CardHeader className='items-center'>
            <Avatar alt="Pest Control" className='w-24 h-24'>
              <AvatarImage source={logo} />
              <AvatarFallback>
                <Text>Rent-O-Trap</Text>
              </AvatarFallback>
            </Avatar>
            <View className='p-3' />
            <CardTitle className='pb-2 text-center border-b-hairline mb-2'>Rent-O-Trap</CardTitle>
          </CardHeader>
          <CardContent>
            <PathFinder className='mb-4'/>
            <BuildingPlan />
          </CardContent>
          {/* <CardFooter className='flex'>
            
          </CardFooter> */}
        </Card>
      </View>
    </ScrollView>
  );
}
