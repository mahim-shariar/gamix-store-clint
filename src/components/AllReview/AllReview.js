import { Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './AllReview.css'

const AllReview = () => {
    const [allReview, setAllReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:8888/review')
            .then(res => res.json())
            .then(data => setAllReview(data))
    }, [])
    return (
        <Container className='gap-y' >
            <Typography variant='h2' className='text-light my-5 text-center ' >
                Our All User Review
            </Typography>
            <Grid container spacing={2} className='App' >
                {
                    allReview.map(rev => <Grid key={rev._id} item sx={{ padding: 5 }} xs={12} md={4} sm={6}>
                        <Card sx={{ minWidth: 275, backgroundImage: `url('//cdn.shopify.com/s/files/1/0355/9135/6553/files/bg_bottom_mobile.png?v=1585130447')` }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} className='text-light' gutterBottom>
                                    {rev.email}
                                </Typography>
                                <Typography variant="h5" className='text-light' component="div">
                                    {rev.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} className='text-light'>
                                    {rev.review}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    )
                }
            </Grid >
        </Container>
    );
};

export default AllReview;