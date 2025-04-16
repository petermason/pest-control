import * as React from 'react';
import { View } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Info } from '~/lib/icons/Info';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { Trap } from '~/components/ui/trap';
import { X } from '~/lib/icons/X';
import { Place } from '~/components/ui/place';
import logo from '~/assets/images/pest-control-logo.png';
import { findHighActivityPaths } from '~/lib/utils/findHighActivityPaths';
import { places } from '~/data';
import { buildPlaceTree } from '~/lib/utils/buildPlaceTree';
import { BuildingPlan } from '~/components/ui/building-plan';
import { PathFinder } from '~/components/ui/path-finder';


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
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Card className='w-full max-w-sm p-6 rounded-2xl'>
        <CardHeader className='items-center'>
          <Avatar alt="Pest Control" className='w-24 h-24'>
            <AvatarImage source={logo} />
            <AvatarFallback>
              <Text>RS</Text>
            </AvatarFallback>
          </Avatar>
          <View className='p-3' />
          <CardTitle className='pb-2 text-center'>Pest Control</CardTitle>
        </CardHeader>
        <CardContent>
          <View className='flex'>
            <BuildingPlan />
            {/* <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Dimension</Text>
              <Text className='text-xl font-semibold'>C-137</Text>
            </View>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Age</Text>
              <Text className='text-xl font-semibold'>70</Text>
            </View>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Species</Text>
              <Text className='text-xl font-semibold'>Human</Text>
            </View> */}
          </View>
        </CardContent>
        <CardFooter className='flex-col gap-3 pb-0'>
          <PathFinder />
        </CardFooter>
      </Card>
    </View>
  );
}
