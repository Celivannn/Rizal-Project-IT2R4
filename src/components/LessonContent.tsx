
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

interface LessonContentProps {
  title: string;
  content: React.ReactNode;
  keyPoints?: React.ReactNode;
  additionalInfo?: React.ReactNode;
}

const LessonContent = ({
  title,
  content,
  keyPoints,
  additionalInfo
}: LessonContentProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      <Separator className="my-4" />
      
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="content">Content</TabsTrigger>
          {keyPoints && <TabsTrigger value="keypoints">Key Points</TabsTrigger>}
          {additionalInfo && <TabsTrigger value="additional">Additional Info</TabsTrigger>}
        </TabsList>
        
        <TabsContent value="content" className="lesson-content">
          {content}
        </TabsContent>
        
        {keyPoints && (
          <TabsContent value="keypoints">
            <Card className="p-4">
              {keyPoints}
            </Card>
          </TabsContent>
        )}
        
        {additionalInfo && (
          <TabsContent value="additional">
            <Card className="p-4">
              {additionalInfo}
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default LessonContent;
