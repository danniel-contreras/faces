(async () => {
    const { computeDescriptor, labelFaces, matchFace } = (
      await import("@transplatin/face")
    ).default();
  
    // Caculate descriptor for an image, it is like a signature for a face.
  
    const image = await computeDescriptor({
      single:true,
      source: `./2.jpeg`,
    });
  
    // Now, give this descriptor unique name
  
    const knownFaces = [new labelFaces("Daniel Radcliffe", [image.descriptor])];
  
    // Now, you have a dataset of known face. Now test a sample image of "Daniel Radcliffe"
  
    const query = await computeDescriptor({
      single:true,
      source: `./5.jpg`,
    });
  
    // Now, check the sample image for a match
  
    const result = matchFace({ data: knownFaces, query: query });
    console.log(result)
  
  })();