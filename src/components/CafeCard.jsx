'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CafeCard = ({ cafe }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cafe.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={cafe.image} alt={cafe.name} className="w-full h-48 object-cover mb-2" />
        <p><strong>주소:</strong> {cafe.address}</p>
        <p><strong>리뷰:</strong> {cafe.review}</p>
        <p><strong>평점:</strong> {cafe.rating}/5</p>
      </CardContent>
    </Card>
  );
};

export default CafeCard;